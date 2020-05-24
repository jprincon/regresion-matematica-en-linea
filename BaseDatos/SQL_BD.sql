create table if not exists usuario(
	idusuario text primary key not null,
	nombre text,
	correo text
);

create table if not exists proyecto(
	idproyecto text primary key not null,
	nombre text,
	descripcion text,
	universidad text,
	grupoinvestigacion text,
	idusuario text references usuario(idusuario)
);

create table if not exists archivo(
	idarchivo text primary key not null,
	nombre text, 
	tipo text,
	idproyecto text references proyecto(idproyecto)
);