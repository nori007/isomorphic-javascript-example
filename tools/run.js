function format(time) {
    return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

async function run(fn, options) {
    const start = new Date();
    console.log(`1[${format(start)}] Starting '${fn.name}'...`);

    await fn(options);
    
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(`1[${format(time)}] Finished '${fn.name}' after ${time} ms`);
}

if(process.mainModule.children.length === 0 && process.argv.length > 2) {
    // 0, 1번째 인자는 무엇? 2번째 인자는 파일명
    delete require.cache[__filename];
    const module = process.argv[2];
    run(require('./' + module + '.js')).catch(err => console.error(err.stack));
}

export default run;