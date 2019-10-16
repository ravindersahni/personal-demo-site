import React from 'react';
import KoanPreview from '../koan-preview/koan-preview.component';
import { KoanUL } from './koan-preview-list.styles';

const KoanPreviewList = ({ koans }) => (
	<KoanUL>
		{koans.map(koan => (
			<li key={koan._id}>
				<KoanPreview koan={koan} />
			</li>
		))}
	</KoanUL>
);

export default KoanPreviewList;
