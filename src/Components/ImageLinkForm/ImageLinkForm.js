import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
	return(
		<div>
			<p className='f3 white'> 
				{'This will detect faces'}
			</p>

			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-60 center 'type='text' onChange={onInputChange} />
					<button 
					className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue w-30'
					onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;