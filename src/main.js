import dictionary from '../resources/dictionary'

/**
 * エントリポイント
 */
export default function main() {
    dictionary.forEach((word) => {
        console.log(word);
    });
}
