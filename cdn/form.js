function Create(){
    return <div>
        <form>
            nom:<input type="text"/>
            prenom:<input type="text"/>
        </form>
    </div>
}
ReactDOM.render(<Create/>,document.getElementById('root'));
export default form;