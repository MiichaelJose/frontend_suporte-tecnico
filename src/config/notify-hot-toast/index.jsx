//https://react-hot-toast.com/docs
import toast from 'react-hot-toast';

// tem que receber os parametros (flexivel)
// retornar um toast

const config = {
    duration: 4500,
    position: 'top-center',
  
    // Styling
    style: {},
    className: '',
  
    // Custom Icon
    //icon: '👏',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#1ecf4a',
      secondary: '#fff', // mudar de acordo com
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
}

function notifySucess (msg) {
    return toast.success(msg, config)
}

function notifyError (msg) {
    return toast.error(msg)
}


export { notifySucess,notifyError }