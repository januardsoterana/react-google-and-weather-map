const Joi = require('joi')

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string()
            .valid('production', 'development', 'demo', 'test')
            .required(),
        REACT_APP_BASE_URL: Joi.string()
            .allow('')
            .default('')
            .description('backend server url'),
    })
    .unknown()

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env)

if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

export const config = {
    api: {
        url: envVars.REACT_APP_BASE_URL,
    },
}
