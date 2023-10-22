import Joi from 'joi';

const patientRegistrationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    folderId: Joi.number(),
    signingSuccess: Joi.boolean().default(false),
})

const recordUpdateSchema = Joi.object({
    id: Joi.number().required(),
    folderId: Joi.number().required(),
    signingSuccess: Joi.boolean().default(false).required(),
})

const downloadSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
})

export {
    patientRegistrationSchema,
    recordUpdateSchema,
    downloadSchema
}