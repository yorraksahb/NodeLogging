var log4js = require('log4js'),
    _ = require('underscore');

var printLogs = function() {

    log4js.configure({
        levels: {
            NOTICE: { value: 20001, colour: 'blue' }
        },
        appenders: {
            IPM: {
                type: 'console',
                layout: {
                    type: 'pattern',
                    pattern: '%[[%d{yyyy-mm-dd hh:mm:ss.SSS}] %p %c (%x{body}) %] %n',
                    tokens: {
                        body: function() {
                            var msg = arguments[0].data[0];
                            // console.log(msg);
                            return maskSensitiveData(msg);
                        }
                    }
                }
            }
        },
        categories: { default: { appenders: ['IPM'], level: 'ERROR' } }
    });

    var maskSensitiveData = function(msg) {
        console.log(_.keys(msg));
        var foo = msg[_.keys(msg)];
        var value = foo[_.keys(foo)];
        console.log(value);
        return msg;
    };

    var object1 = {
        event: {
            token: 'asdjhdjhsjdhjshdj'
        }
    };
    const logger = log4js.getLogger('IPM');
    logger.debug('Debug');
    logger.info('One');
    logger.notice('Notice');
    logger.warn('Warn');
    logger.error(object1);
    // logger.fatal('Fatal');
}
printLogs();