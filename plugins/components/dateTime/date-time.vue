<template>
    <div class="date-time" :style="{ 'font-size': `${useStyleObj.fontSize}px` }">
        <p :style="styleObject">{{ nowDate }}</p>
        <p :style="styleObject">{{ nowTime }}</p>
        <p>show README</p>
    </div>
</template>
<script>
    export default {
        name: "dateTime",
        props: {
            styleObj: {//客户端传递的样式
                type: Object,
                default: () => ({
                    fontSize: 25,
                    color: ["#dcedff", "#5ca9ff"]
                })
            }
        },
        computed: {
            useStyleObj() {//用computed是为了暴露客户端的styleObj样式属性值可以选填，更加灵活
                let size = 25;
                let color = ["#dcedff", "#5ca9ff"];
                if (this.styleObj.fontSize) {
                    size = this.styleObj.fontSize;
                }
                if (this.styleObj.color) {
                    color = this.styleObj.color;
                }
                return {
                    fontSize: size,
                    color: color
                };
            },
            styleObject() {//根据客户端传递的样式值配置文字的渐变色
                return {
                    background: `linear-gradient(180deg,${this.useStyleObj["color"][0]},
        ${
                            this.useStyleObj.color.length > 1
                                    ? this.useStyleObj["color"][1]
                                    : this.useStyleObj["color"][0]
                            })`,
                    "-webkit-background-clip": "text"
                };
            }
        },
        data() {
            return {
                timer: null,
                nowWeek: "",
                nowDate: "",
                nowTime: ""
                //   styleBox: {}
            };
        },
        created() {
            this.timer = setInterval(() => {
                this.setNowTimes();
            }, 1000); //时间
        },
        beforeDestroy: function() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        },
        methods: {
            setNowTimes() {//时间拼接方法
                const myDate = new Date();
                const wk = myDate.getDay();
                const yy = String(myDate.getFullYear());
                const mm = myDate.getMonth() + 1;
                const dd = String(
                        myDate.getDate() < 10 ? `0${myDate.getDate()}` : myDate.getDate()
                );
                const hou = String(
                        myDate.getHours() < 10 ? `0${myDate.getHours()}` : myDate.getHours()
                );
                const min = String(
                        myDate.getMinutes() < 10
                                ? `0${myDate.getMinutes()}`
                                : myDate.getMinutes()
                );
                const sec = String(
                        myDate.getSeconds() < 10
                                ? `0${myDate.getSeconds()}`
                                : myDate.getSeconds()
                );
                const weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
                const week = weeks[wk];
                this.nowDate = `${yy}/${mm}/${dd} ${week}`;
                this.nowTime = `${hou}:${min}:${sec}`;
                this.nowWeek = week;
            }
        }
    };
    //样式文件
</script>
<!--<style lang="scss" scoped></style>-->