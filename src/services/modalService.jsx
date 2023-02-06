import { createRoot } from 'react-dom/client';
import Modal from '../components/organism/modal';

class ModalService {
    confirm(title, message, buttons) {
        return new Promise((resolve, reject) => {
            const container = document.getElementById('custom-append-container');
            const root = createRoot(container);
            root.render(
                <Modal
                    title={title}
                    message={message}
                    buttons={buttons}
                    resolve={resolve}
                    isClose={() => root.unmount()}
                />
            );
        })
    }
}

export default new ModalService;