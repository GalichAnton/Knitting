import { Close } from '@material-ui/icons'
import { CloseBtn, Modal, ModalContent } from './ModalStyles'


export default function ModalWindow(props) {
  return (
    <Modal onClick={props.onClick} opened={props.openModal}>
      <ModalContent onClick={(e)=>e.stopPropagation()}>
        <CloseBtn><Close onClick={props.onClick} style={{fontSize:'40px'}}/></CloseBtn>
      {props.children}
      </ModalContent>
    </Modal>
  )
}
