import axios from 'axios'

export { };

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios.get(url).then(response => {

    interface Article {
        id: number;
        title: number;
        description: string;
    }

    let data: Article;
    data = response.data;
    // data = [{
    //     id: 1,
    //     title: 'title',
    //     description: 'description'
    // }]
    console.log(data);
});




