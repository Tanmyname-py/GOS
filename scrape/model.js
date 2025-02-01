const HuggingFace = require('./bavn');
const huggingFace = new HuggingFace();

/**
 * @param {string} text.
 * @param {string} model.
 * @param {number} [speed=1.0].
 * @returns {Promise<object>}.
 */
async function generateBlueArchiveVoice(text, model, speed = 1.0) {
    try {
        const result = await huggingFace.blueArchiveVoice({ text, model, speed });
        return result;
    } catch (error) {
        throw new Error(`Error generating voice for ${model}: ${error.message}`);
    }
}

/**
 * Airi model.
 * @param {string} text.
 * @returns {Promise<object>}
 */
async function airiVoice(text) {
    return generateBlueArchiveVoice(text, 'Airi');
}

/**
 *Hoshino model.
 * @param {string} text.
 * @returns {Promise<object>}
 */
async function hoshinoVoice(text) {
    return generateBlueArchiveVoice(text, 'Hoshino');
}

/**
 * Shiroko model.
 * @param {string} text.
 * @returns {Promise<object>}
 */
async function shirokoVoice(text) {
    return generateBlueArchiveVoice(text, 'Shiroko');
}

/**
 * Hina model.
 * @param {string}.
 * @returns {Promise<object>}
 */
async function hinaVoice(text) {
    return generateBlueArchiveVoice(text, 'Hina');
}
async function arisuVoice(text) {
    return generateBlueArchiveVoice(text, 'Aris');
}
module.exports = {
    airiVoice,
    hoshinoVoice,
    shirokoVoice,
    hinaVoice,
    arisuVoice,
};
