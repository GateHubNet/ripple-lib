const { Remote } = require('./');

const remote = new Remote({
    servers: [ 'wss://s1.ripple.com:443'  ]
});

const address = 'rJAe61oaHhi4Rq46fwkfxaR4p8YVvsqodD';
const secret = 'snDKzjMLVnH5hpZ7qM9yXiEGVaUHZ';
const regularAddress = 'rwY1JMd6anntT4DjUd5t4jGg4BXPvz5ecm';
const regularSecret = 'shdmELhTy48Ufhp5v56RBH3PhG62i';

remote.connect(function() {
    const tx = remote.createTransaction('AccountSet', {account: address});

    tx.secret(regularSecret);

    tx.on('success', function (res) {
        console.log("successfull transaction", res);
    });

    tx.on('error', function (res) {
        console.error("transaction error", res);
    });

    tx.submit();
});
