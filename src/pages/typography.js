import React from 'react';

const Typography = () => {
	return (
		<div className='container'>
			<div className='columns'>
				<div className='column p-6'>
					<h1>Testing display of HTML elements</h1>
					<h2>This is 2nd level heading</h2>
					<p>This is a test paragraph.</p>
					<h3>This is 3rd level heading</h3>
					<p>This is a test paragraph.</p>
					<h4>This is 4th level heading</h4>
					<p>This is a test paragraph.</p>
					<h5>This is 5th level heading</h5>
					<p>This is a test paragraph.</p>
					<h6>This is 6th level heading</h6>
					<p>This is a test paragraph.</p>
					<h2>Basic block level elements</h2>
					<p>
						This is a normal paragraph (<code>p</code> element). To add some
						length to it, let us mention that this page was primarily written
						for testing the effect of <strong>user style sheets</strong>. You
						can use it for various other purposes as well, like just checking
						how your browser displays various HTML elements by default. It can
						also be useful when testing conversions from HTML format to other
						formats, since some elements can go wrong then.
					</p>
					<p>
						This is another paragraph. I think it needs to be added that the set
						of elements tested is not exhaustive in any sense. I have selected
						those elements for which it can make sense to write user style sheet
						rules, in my opionion.
					</p>
					<div>
						This is a <code>div</code> element. Authors may use such elements
						instead of paragraph markup for various reasons. (End of{' '}
						<code>div</code>.)
					</div>
					<blockquote>
						<p>
							This is a block quotation containing a single paragraph. Well, not
							quite, since this is not <em>really</em>
							quoted text, but I hope you understand the point. After all, this
							page does not use HTML markup very normally anyway.
						</p>
					</blockquote>
					<p>
						The following contains address information about the author, in an{' '}
						<code>address</code>
						element.
					</p>
					<address>Päivänsäteenkuja 4 A, Espoo, Finland</address>

					<h2>Lists</h2>

					<p>
						This is a paragraph before an <strong>unnumbered</strong> list (
						<code>ul</code>). Note that the spacing between a paragraph and a
						list before or after that is hard to tune in a user style sheet. You
						can't guess which paragraphs are logically related to a list, e.g.
						as a "list header".
					</p>

					<ul>
						<li>lorem</li>
						<li>lorem</li>
						<li>lorem</li>
						<li>lorem</li>
						<li>lorem</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Typography;