'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import io from "socket.io-client";

let socket;

const NavBar = () => {
	const [newNotification, setNewNotification] = useState(false);
	const [notifications, setNotifications] = useState([]);

	const handleIndicator = () => {
		if (newNotification) {
			setNewNotification(false)
		}

		localStorage.setItem('newNotification', JSON.stringify(false));
	}

	const socketInitializer = async () => {
		await fetch('/api/socket/io')

		socket = io(undefined, {
			path: '/api/socket/io'
		})

		socket.on('connect', () => {
			console.log('Connected', socket.id)
		})

		socket.on('notifications', (data) => {
			setNewNotification(true);
			const updatedNotification = [...notifications];
			data.currentTime = String(new Date().toLocaleTimeString('en-US'));
			updatedNotification.push(data);
			setNotifications(updatedNotification.reverse());

			localStorage.setItem('notifications', JSON.stringify(updatedNotification));
			localStorage.setItem('newNotification', JSON.stringify(true));
		});

		const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
		const storedNewNotification = JSON.parse(localStorage.getItem('newNotification'));

		if (storedNotifications) {
			setNotifications(storedNotifications);
		}

		if (storedNewNotification) {
			setNewNotification(storedNewNotification);
		}

	}

	useEffect(() => {
		socketInitializer();
	}, []);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<Link
								href="/"
								rel="noopener noreferrer"
							>Homepage</Link>
						</li>
						<li>
							<Link
								href="/about"
								rel="noopener noreferrer"
							>About</Link></li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<h2 className="normal-case text-xl font-semibold">Sample Healthcare App</h2>
			</div>
			<div className="navbar-end">
				<details className="dropdown dropdown-end">
					<summary className="m-0.5 btn btn-circle btn-ghost" onClick={handleIndicator}>
						<div className="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
							{newNotification ? (
								<span className="badge badge-xs badge-primary indicator-item"></span>
							) : null}
						</div>
					</summary>
					<ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 w-80 h-auto mt-4 border-x-stone-400">
						{notifications.length ? (
							notifications.map((notification, index) => (
								<li key={`${index}`} className={index !== 0 ? "pb-1 mb-2 border-t border-gray-300" : "pb-1 mb-1"}>
									<div className="border-solid h-16">
										<p className='font-semibold'>{notification.message}</p>
										<br/>
										<p className='absolute bottom-0 right-0 text-right text-xs text-gray-600 mb-4'>{notification.currentTime}</p>
									</div>
								</li>
							))
						) : (
							<div className="border-b-primary-500 w-96">
								<p className="font-semibold text-center">No notifications</p>
							</div>
						)}
					</ul>
				</details>
			</div>
		</div>
	);
};
export default NavBar;