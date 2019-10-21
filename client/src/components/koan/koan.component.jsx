import React from 'react';
import { KoanArticle, KoanP } from './koan.styles';

const Koan = ({ koan }) => (
	<KoanArticle>
		<h1>{koan.title}</h1>
		{koan.body.map((p, i) => <KoanP key={i}>{p}</KoanP>)}
	</KoanArticle>
);

export default Koan;
