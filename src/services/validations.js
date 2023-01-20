// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const eigtCaracter = (label) => label.length >= 8;

const oneSpecialCara = (label) => {
    for (let index = 0; index < label.length; index++) {
        const compt = 0;
        const element = label[index];
        if ((compt = 1)) {
            return true;
        }
        if (
            element ===
            /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
        )
            compt += 1;
    }
    return false;
};

exports.isEmpty = isEmpty;
exports.eigtCaracter = eigtCaracter;
exports.oneSpecialCara = oneSpecialCara;
