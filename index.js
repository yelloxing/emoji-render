/*!
* emoji - 自定义表情图片启动者，支持更丰富的字符输入
* git+https://github.com/yelloxing/emoji-render.git
*
* author 心叶(yelloxing@gmail.com)
*
* Copyright yelloxing
* Released under the MIT license
*
*/

/**
 * 让字符串中的表情生效
 * @author 心叶（yelloxing@gmail.com）
 * @param {string} oralCode 原始字符串
 * @return {string} 以及解析成表情的字符串
 */

var emojiList = {

    // 表情
    ghost: "👻", smile: "😊", cry: "😭", sad: "😟", fear: "😨", angry: "😠", skull: "💀",
    robot: "🤖",hot:"🥵",cold:"🥶",woozy:"🥴",dizzy:"😵",nerd:"🤓",confuse:"😕",
    worry:"😟",

    // 动物
    dog: "🐕", cat: "🐈", pig: "🐖", fox: "🦊", wolf: "🐺", mouse: "🐁", owl: "🦉",
    snake: "🐍", dolphin: "🐬", fish: "🐟", butterfly: "🦋", ant: "🐜", ox: "🐂", elephant: "🐘",
    panda: "🐼",

    // 水果或蔬菜
    strawberry: "🍓", banana: "🍌", orange: "🍊", watermelon: "🍉", grape: "🍇",melon:"🍈",lemon:"🍋",
    mango:"🥭",pear:"🍐",peach:"🍑",cherries:"🍒",tomato:"🍅",coconut:"🥥",avocado:"🥑",
    eggplant:"🍆",potato:"🥔",carrot:"🥕",cucumber:"🥒",broccoli:"🥦",garlic:"🧄",onion:"🧅",
    mushroom:"🍄",chestnut:"🌰",peanuts:"🥜",

    // 交通工具
    rocket: "🚀", bus: "🚌", airplane: "✈️", metro: "🚇", train: "🚆", bicycle: "🚲", motorcycle: "🏍️",
    car: "🚓", ambulance: "🚑", "fire-engine": "🚒",

    // 乐器
    violin:"🎻",trumpet:"🎺",guitar:"🎸",saxophone:"🎷",microphone:"🎤"

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