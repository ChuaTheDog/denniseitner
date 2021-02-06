import React from 'react';
import BootstrapPagination from 'react-bootstrap/Pagination';
import paginationStyles from './pagination.module.scss';
import Row from 'react-bootstrap/Row';
const Pagination = () => {
	return (
		<div>
			<BootstrapPagination>
				<BootstrapPagination.Item>
					<BootstrapPagination.First />
					<BootstrapPagination.Prev />
					<BootstrapPagination.Item>{1}</BootstrapPagination.Item>
					<BootstrapPagination.Ellipsis />
					<BootstrapPagination.Item>{10}</BootstrapPagination.Item>
					<BootstrapPagination.Item>{11}</BootstrapPagination.Item>
					<BootstrapPagination.Item active>{12}</BootstrapPagination.Item>
					<BootstrapPagination.Item>{13}</BootstrapPagination.Item>
					<BootstrapPagination.Item disabled>{14}</BootstrapPagination.Item>
					<BootstrapPagination.Ellipsis />
					<BootstrapPagination.Item>{20}</BootstrapPagination.Item>
					<BootstrapPagination.Next />
					<BootstrapPagination.Last />
				</BootstrapPagination.Item>
			</BootstrapPagination>
		</div>
	);
};

export default Pagination;
