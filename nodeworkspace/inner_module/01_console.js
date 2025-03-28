// inner_module/01_console.js
const fs = require('fs'); // 내장 모듈을 호출할 때는 require 사용하고 매개변수로 모듈이름을 입력
const { Console } = require('console');

const logOutput = fs.createWriteStream('./logs/stdout.log'); // 로그를 남기는 파일의 경로
const errOutput = fs.createWriteStream('./logs/stderr.log'); // 일반 로그와 섞여있으면 에러발생시 즉각 대응이 어렵기 때문에 따로 관리
// logs폴더는 미리 만들어놔야 한다. 폴더는 자동생성되지않음 / 파일은 생성해줌

const logger = new Console({stdout : logOutput, stderr : errOutput});

let count = 5;
logger.log('count : %d', count); // stdout
logger.error(`count : ${++count}`); // stderr