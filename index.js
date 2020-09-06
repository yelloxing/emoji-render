
/**
 * 让字符串中的表情生效
 * @author 心叶（yelloxing@gmail.com）
 * @param {string} oralCode 原始字符串
 * @return {string} 以及解析成表情的字符串
 */

var emojiList = {

    // 表情
    ghost: "👻", smile: "😊", cry: "😭", sad: "😟",

    // 动物
    dog: "🐕", cat: "🐈", pig: "🐖", fox: "🦊", wolf: "🐺", mouse: "🐁", owl: "🦉",
    snake: "🐍", dolphin: "🐬", fish: "🐟", butterfly: "🦋", ant: "🐜", ox: "🐂", elephant: "🐘",
    panda: "🐼",

    // 水果
    strawberry: "🍓", banana: "🍌", orange: "🍊", watermelon: "🍉", grape: "🍇",

    // 交通工具
    rocket: "🚀", bus: "🚌", airplane: "✈️", metro: "🚇", train: "🚆", bicycle: "🚲", motorcycle: "🏍️",
    car: "🚓", ambulance: "🚑", "fire-engine": "🚒"

};

// 设置上面表情的最大长度
var maxEmojiLength = 21;

var compiler = function (oralCode) {

    // 当前判断的位置
    var index = 0;

    // 编译后的字符串
    var newCode = "";

    // 获取往后num个值
    var nextNValue = function (num, _index) {
        _index = arguments.length > 1 ? _index : index;
        return oralCode.substring(_index, num + _index > oralCode.length ? oralCode.length : num + _index);
    };

    while (index < oralCode.length) {
        if (nextNValue(2) == '::') {

            // 寻找表情的时候，从长到短进行
            for (var num = maxEmojiLength; num > 0; num--) {

                // 如果找到了表情
                var emoji = emojiList[nextNValue(num, index + 2)];
                if (emoji) {
                    newCode += emoji;
                    index += (num + 2);
                    break;
                }

            }

            if (num <= 0) {
                newCode += oralCode[index++];
            }

        } else {
            newCode += oralCode[index++];
        }
    }

    return newCode;

};

if ((typeof module === "undefined" ? false : typeof (module)) === "object" && typeof (module.exports) === "object") {
    module.exports = compiler;
} else {
    window.emojiRender = compiler;
}