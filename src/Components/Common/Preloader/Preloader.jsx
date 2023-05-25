import preloader from '../../../assets/images/Spinner-1.9s-204px.svg';

let Preloader = (props) => {
    return <div style={ {backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
};

export default Preloader