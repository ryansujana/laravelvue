<template>
	<main>
		<div class="container-fluid px-4">
			<h1 class="mt-4">Categories</h1>
			<ol class="breadcrumb mb-4">
				<li class="breadcrumb-item">
					<router-link to="/">Dashboard</router-link>
				</li>
				<li class="breadcrumb-item active">Categories</li>
			</ol>
			
			<div class="row">
				<div class="col-xl-6">
					<div class="card mb-4">
						<div class="card-header">
							<i class="fas fa-chart-area me-1"></i>
							Categories Management
						</div>
						<div class="card-body">
							<table class="table">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Image</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Rayen</td>
										<td>Blala</td>
										<td>
											<button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
											<button class="btn btn-danger btn-sm"><span class="fa fa-trash"></span></button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
	</main>
</template>