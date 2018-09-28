import run from './run';

async function clean() {
    // 결과물 디렉토리 초기화
}

async function copy() {
    // 정적 파일 결과물 디렉토리에 복사
}

async function bundle() {
    // 웹팩으로 소스 코드 번들링
}

async function build() {
    await run(clean);
    await run(copy);
    await run(bundle);
}

export default build;

