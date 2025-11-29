import apperror from '../../assets/App-Error.png'

const AppError = () => {
    return (
        <div className='flex justify-center items-center'>
            <img className='max-w-6xl mx-auto ' src={apperror} alt="" />
        </div>
    );
};

export default AppError;