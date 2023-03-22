const card = 
<div className="container">
    <div className="card">
        <div className="card-header">
            Featured
        </div>

<div className="card-body">
<h5 className="card-title">Special title treatment</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>

const element = React.createElement(
    'div',
    [],
    card
);

ReactDOM.render(
    element,
    document.getElementById('root')
);