
import video from '../../assets/Oops - 112707.mp4'
const ErrorPage = () => {
    return (
        <div className=' container max-w-5xl mx-auto '>
        <h1>Oops! Something went wrong...</h1>
        <div>
        <video autoPlay muted loop  >
          <source src={video} type="video/mp4" />
        </video>
        </div>
      </div>
    );
};

export default ErrorPage;