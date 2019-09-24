import dictionary from '../resources/dictionary'

/**
 * エントリポイント
 */
export default function main() {
    dictionary.forEach((word, index) => {
        console.log(`${index + 1} : ${word}`);
    });
}
