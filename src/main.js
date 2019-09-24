import dictionaryData from '../resources/dictionary'

/**
 * リソースデータをロード
 *
 * @param data
 */
function load(data) {
    return data.map((word, index) => {
        return {
            id: index + 1, // 1始まりの連番
            word,
        };
    });
}

/**
 * エントリポイント
 */
export default function main() {
    const dictionary = load(dictionaryData);

    dictionary.forEach((word) => {
        console.log(`${word.id} : ${word.word}`);
    });
}
