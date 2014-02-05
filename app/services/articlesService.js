//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('articlesService', function () {
    this.getArticles = function () {
        return articles;
    };

//    this.insertCustomer = function (firstName, lastName, city) {
//        var topID = customers.length + 1;
//        customers.push({
//            id: topID,
//            firstName: firstName,
//            lastName: lastName,
//            city: city
//        });
//    };
//
//    this.deleteCustomer = function (id) {
//        for (var i = customers.length - 1; i >= 0; i--) {
//            if (customers[i].id === id) {
//                customers.splice(i, 1);
//                break;
//            }
//        }
//    };

    this.getArticle = function (id) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id === id) {
                return articles[i];
            }
        }
        return null;
    };

    var articles = [
        {
            id: 1, 
            title: 'Article 1 title', 
            content: 'Sed ullamcorper, augue vitae lacinia auctor, lacus orci consequat nisi, sed tristique lorem nisi nec dolor. Morbi lacinia urna orci, ac porta arcu condimentum sed. Nam eget dui vel leo mattis consequat. Donec blandit gravida dui nec porttitor. Vestibulum pharetra, dui id malesuada dapibus, augue mi egestas nunc, in laoreet quam nisl vitae enim. Vestibulum ut mollis magna. Sed quis elit eget mi elementum faucibus sed scelerisque dui. Quisque lobortis erat est, semper feugiat turpis fringilla vitae. Quisque faucibus est id sapien tristique accumsan. Sed vitae volutpat lorem. Vivamus quis iaculis leo, vel molestie risus. In placerat varius augue, lobortis gravida lectus mattis a. Cras pulvinar, mauris ut varius pulvinar, nisl lectus aliquam enim, quis pharetra dui elit et diam. Etiam convallis turpis mollis quam dictum sodales.', 
            createdOn: '2/5/2014',
            img: 'img/350x150.gif',
            tags: [
                { tag: 'Basket'},
                { tag: 'Yarn'},
                { tag: 'Needes'}
            ]
        },
        {
            id: 2, 
            title: 'Article 2 title', 
            content: 'Sed ullamcorper, augue vitae lacinia auctor, lacus orci consequat nisi, sed tristique lorem nisi nec dolor. Morbi lacinia urna orci, ac porta arcu condimentum sed. Nam eget dui vel leo mattis consequat. Donec blandit gravida dui nec porttitor. Vestibulum pharetra, dui id malesuada dapibus, augue mi egestas nunc, in laoreet quam nisl vitae enim. Vestibulum ut mollis magna. Sed quis elit eget mi elementum faucibus sed scelerisque dui. Quisque lobortis erat est, semper feugiat turpis fringilla vitae. Quisque faucibus est id sapien tristique accumsan. Sed vitae volutpat lorem. Vivamus quis iaculis leo, vel molestie risus. In placerat varius augue, lobortis gravida lectus mattis a. Cras pulvinar, mauris ut varius pulvinar, nisl lectus aliquam enim, quis pharetra dui elit et diam. Etiam convallis turpis mollis quam dictum sodales.', 
            createdOn: '2/5/2014',
            img: 'img/350x150.gif',
            tags: [
                { tag: 'Basket'},
                { tag: 'Yarn'},
                { tag: 'Needes'}
            ]
        },
        {
            id: 3, 
            title: 'Article 3 title', 
            content: 'Sed ullamcorper, augue vitae lacinia auctor, lacus orci consequat nisi, sed tristique lorem nisi nec dolor. Morbi lacinia urna orci, ac porta arcu condimentum sed. Nam eget dui vel leo mattis consequat. Donec blandit gravida dui nec porttitor. Vestibulum pharetra, dui id malesuada dapibus, augue mi egestas nunc, in laoreet quam nisl vitae enim. Vestibulum ut mollis magna. Sed quis elit eget mi elementum faucibus sed scelerisque dui. Quisque lobortis erat est, semper feugiat turpis fringilla vitae. Quisque faucibus est id sapien tristique accumsan. Sed vitae volutpat lorem. Vivamus quis iaculis leo, vel molestie risus. In placerat varius augue, lobortis gravida lectus mattis a. Cras pulvinar, mauris ut varius pulvinar, nisl lectus aliquam enim, quis pharetra dui elit et diam. Etiam convallis turpis mollis quam dictum sodales.', 
            createdOn: '2/5/2014',
            img: 'img/350x150.gif',
            tags: [
                { tag: 'Basket'},
                { tag: 'Yarn'},
                { tag: 'Needes'}
            ]
        }
    ];

});