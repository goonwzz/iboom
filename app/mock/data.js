var data = {
    name: "前段笔试题",
    introduce: "布姆电竞主要业务包括布姆视频，布姆电竞学院，教学内容覆盖英雄联盟，守望先锋，王者荣耀等当下热门的电竞游戏。",
    questions: [
        {type: 'text', question: " 常用那几种浏览器测试？有哪些内核(Layout Engine)?"}, {
            type: 'singleSelection',
            question: ' DOM怎样添加节点?',
            answers: [{answer: 'appendChild'}, {answer: 'getElementsByTagName'}, {answer: 'createTextNode'}, {answer: 'createDocumentFragment'}]
        }, {
            type: 'MultipleSelection',
            question: '  null和undefined的区别?',
            answers: [{answer: '变量被声明了，但没有赋值时，就等于undefined。'}, {answer: '调用函数时，应该提供的参数没有提供，该参数等于undefined。'}, {answer: ' 作为函数的参数，表示该函数的参数不是对象。'}, {answer: '创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。'}]
        }, {
            type: 'custom',
            question: '  null和undefined的区别?',
            hasAnswers: false,
            answers: [{type: 'text', question: " 常用那几种浏览器测试？有哪些内核(Layout Engine)?"}, {
                type: 'MultipleSelection',
                question: '  null和undefined的区别?',
                answers: [{answer: '变量被声明了，但没有赋值时，就等于undefined。'}, {answer: '调用函数时，应该提供的参数没有提供，该参数等于undefined。'}, {answer: ' 作为函数的参数，表示该函数的参数不是对象。'}, {answer: '创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。'}]
            }]
        }
    ]
};
module.exports = data