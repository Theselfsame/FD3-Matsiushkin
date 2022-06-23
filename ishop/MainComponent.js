var MainComponent = React.createClass({

    displayName: "MainComponent",

    render: function() {
        /* верхняя строка Feature с пояснениями к таблице */
        var featureBlock = React.DOM.tr({className: 'Item'},
        React.DOM.td({className: 'Feature'}, 'Shop'),
        React.DOM.td({className: 'Feature'}, 'Goods'),
        React.DOM.td({className: 'Feature'}, 'Cost'),
        React.DOM.td({className: 'Feature'}, 'On stock'),
        React.DOM.td({className: 'Feature'}, 'Product icon'),
        );

        var goodsBlock = [];
        this.props.goods.forEach(elem => {
            var image = React.DOM.img({className: 'Image', src: elem.image, alt: 'image'})
            
            var item = React.DOM.tr({className: 'Item', key: elem.code},
            React.DOM.td({className: 'DataBlock'}, this.props.shop),
            React.DOM.td({className: 'DataBlock'}, elem.title),
            React.DOM.td({className: 'DataBlock'}, elem.cost),
            React.DOM.td({className: 'DataBlock'}, elem.stock),
            React.DOM.td({className: 'DataBlock'}, image),
            )
            goodsBlock.push(item)

        });

        return React.DOM.table({className: 'Wrapper'},
        React.DOM.tbody({className: 'Feature'}, featureBlock),
        React.DOM.tbody({className: 'Goods'}, goodsBlock),
        );
    },
    
});