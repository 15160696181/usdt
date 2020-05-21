$(window).scroll(function () {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        $(".cz-top").css({
            background: 'rgba(137,35,217,1)'
        })
        $('.exchange-top').css({
            background: 'rgba(137,35,217,1)'
        })
        $('.ct_record_top>div:eq(0)').css({
            background: 'rgba(137,35,217,1)'
        })
        $('.shouzhi_mx_top>div:eq(0)').css({
            background: 'rgba(137,35,217,1)'
        })
    } else {
        $(".cz-top").css({
            background: 'transparent'
        })
        $('.exchange-top').css({
            background: 'transparent'
        })
        $('.ct_record_top>div:eq(0)').css({
            background: 'transparent'
        })
        $('.shouzhi_mx_top>div:eq(0)').css({
            background: 'transparent'
        })
    }
})