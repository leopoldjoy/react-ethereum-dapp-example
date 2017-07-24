import path from 'path';
import fs from 'fs';

// Given the name of one of the smart-contracts (passed via the URL),
// this API returns the contract's ABI from the contract's JSON file.
export default function loadContractABI(req) {
  return new Promise((resolve, reject) => {
    if (typeof req.url === 'undefined' ||
        req.url.split('/').length < 3) {
      return reject(new Error('No contractName provided in request URL!'));
    }
    const contractName = req.url.split('/')[2];
    const filename = `${contractName}.json`;
    const source = fs.readFileSync(path.join(__dirname, '../../build/contracts/', filename));
    const JSONObject = JSON.parse(source);
    return resolve({
      abi: JSONObject.abi
    });
  });
}
