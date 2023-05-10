import axios from 'axios';
import { AiFillFire, AiOutlineExclamation } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import styles from '../assets/scss/design.module.scss';
import { postDataOptions } from './backendService';
import { BASE_URL } from './environment';

// APIs
const FILE_UPLOAD = 'upload';

// Services
export const fileUpload = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, FILE_UPLOAD, payload, true));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

//Priority tags
export const priorityTag = (value) => {
	if (value===0) {
		return (
			<span className={styles.priorityTag} style={{color: 'red'}}><AiFillFire/> Critical</span>
		)
	}
	else if (value===1) {
		return (
			<span className={styles.priorityTag} style={{color: 'red'}}><AiOutlineExclamation style={{marginRight: '-1px'}}/> High</span>
		)
	}
	else if (value===2) {
		return (
			// <TooltipCustom title="Medium">
				<span className={styles.priorityTag} style={{color: '#ef9b00'}}><HiOutlineMenuAlt4/>Medium</span>
			// </TooltipCustom>
		)
	}
	else if (value===3) {
		return (
			// <TooltipCustom title="Low">
				<span className={styles.priorityTag} style={{color: 'green'}}><FiChevronDown/>Low</span>
			// </TooltipCustom>
		)
	}
};