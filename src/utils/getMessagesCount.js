import data as * from '../data/mailData.json';

export default function getData() {
    let mailData = JSON.parse(data);

    console.log(mailData)
}