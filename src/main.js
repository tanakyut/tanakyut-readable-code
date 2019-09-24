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
export default function main({ argv }) {
    const dictionary = load(dictionaryData);

    const id = argv[2];
    if (id == null) {
        dictionary.forEach((word) => {
            console.log(`${word.id} : ${word.word}`);
        });
        return;
    }

    const word = dictionary[id];
    if (word == null) {
        console.log('単語が見つかりません。');
        return;
    }

    console.log(`${word.id} : ${word.word}`);
}
