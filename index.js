var log4js = require('log4js');

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
                    pattern: '%[[%d{ISO8601}] [%p] %c - %x{body} %]%n',
                    tokens: {
                        body: function() {
                            var msg = arguments[0].data[0];
                            console.log(arguments[0]);
                            return msg; 
                          }
                    }
                }
            }
        },
        categories: { default: { appenders: ['IPM'], level: 'ERROR' } }
    });

    const logger = log4js.getLogger('IPM');
    logger.debug('Debug');
    logger.info('One');
    logger.notice('Notice');
    logger.warn('Warn');
    logger.error('Error');
    logger.fatal('Fatal');
}
printLogs();