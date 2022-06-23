$(function() {
    //点击注册账号
    $('#link_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    });
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    });

    // 从layui获取form
    var form = layui.form;
    var layer = layui.layer;
    form.verify({
            pwd: [/^[\S]{6,12}$/, '密码必须为6-12位,且不能出现空格'],
            repwd: function(value) {
                var pwd = $('.reg-box [name=password]').val();
                if (pwd !== value) {
                    return '两次不一致'

                }
            }
        })
        //监听注册表单
    $('#form_reg').on('submit', function(e) {
        e.preventDefault();
        var data = { username: $('#form_reg [name=username]').val(), password: $('#form_reg [name=password]').val() }
        $.post('http://www.liulongbin.top:3007/api/reguser', data, function(res) {
            if (res.status !== 0) {

                return layer.msg(res.message)
            }
            layer.msg('注册成功 请登录');
            $('#link_login').click()
        })
    });
    //登录表单
    $('#form_login').submit(function(e) {
        e.preventDefault();
    })
})