unit uMetodosServidor;

interface

uses System.SysUtils, System.Classes, System.Json, dialogs,
  Datasnap.DSServer, Datasnap.DSAuth, FireDAC.Stan.Intf, FireDAC.Stan.Option,
  FireDAC.Stan.Error, FireDAC.UI.Intf, FireDAC.Phys.Intf, FireDAC.Stan.Def,
  FireDAC.Stan.Pool, FireDAC.Stan.Async, FireDAC.Phys, FireDAC.VCLUI.Wait,
  Data.DB, FireDAC.Comp.Client, FireDAC.Phys.PG, FireDAC.Phys.PGDef,
  FireDAC.Stan.Param, FireDAC.DatS, FireDAC.DApt.Intf, FireDAC.DApt,
  FireDAC.Comp.DataSet, uFRegresion;

type
{$METHODINFO ON}
  TRegresion = class(TDataModule)
    Conexion: TFDConnection;
    FDQuery1: TFDQuery;
    procedure DataModuleCreate(Sender: TObject);
  private
    procedure mensaje(procedimiento, msg: string);
  public
    { Public declarations }
    function EchoString(Value: string): string;
    function ReverseString(Value: string): string;

    function ServidorConectado: TJSONObject;

    { Métodos Usuario }
    function updateUsuario(const datos: TJSONObject): TJSONObject;
    function Usuarios: TJSONObject;
    function Usuario(const IdUsuario: string): TJSONObject;
    function acceptUsuario(const datos: TJSONObject): TJSONObject;
    function cancelUsuario(const IdUsuario: string): TJSONObject;
  end;
{$METHODINFO OFF}

implementation

{$R *.dfm}

uses System.StrUtils;

procedure TRegresion.DataModuleCreate(Sender: TObject);
begin
  Conexion.Connected := True;
end;

function TRegresion.EchoString(Value: string): string;
begin
  Result := Value;
end;

function TRegresion.ReverseString(Value: string): string;
begin
  Result := System.StrUtils.ReverseString(Value);
end;

function TRegresion.ServidorConectado: TJSONObject;
var
  Json: TJSONObject;
begin
  try
    Json := TJSONObject.Create;
    Json.AddPair('Respuesta', 'Servidor Conectado');
  except
    on E: Exception do
    begin
      Json.AddPair('Error', E.Message);
    end;
  end;

  Result := Json;
end;

{ Método POST-Usuario }
function TRegresion.updateUsuario(const datos: TJSONObject): TJSONObject;
var
  Json: TJSONObject;
  Query: TFDQuery;
begin
  try
    Query := TFDQuery.Create(nil);
    Query.Connection := Conexion;
    Json := TJSONObject.Create;

    Query.Close;
    Query.SQL.Clear;

    Query.SQL.Add('INSERT INTO usuario (idusuario, nombre, correo, contra)');
    Query.SQL.Add(' VALUES (:idusuario, :nombre, :correo, :contra)');

    Query.Params.ParamByName('idusuario').Value :=
      datos.GetValue('idusuario').Value;
    Query.Params.ParamByName('nombre').Value := datos.GetValue('nombre').Value;
    Query.Params.ParamByName('correo').Value := datos.GetValue('correo').Value;
    Query.Params.ParamByName('contra').Value := datos.GetValue('contra').Value;

    Query.ExecSQL;

    Json.AddPair('Respuesta', 'El Usuario se creo correctamente');
    mensaje('updateUsuario', Json.ToString);
  except
    on E: Exception do
    begin
      Json.AddPair('Error', E.Message);
      mensaje('updateUsuario-Error', E.Message);
    end;
  end;

  Result := Json;
end;

{ Métodos GET-ALL Usuarios }
function TRegresion.Usuarios: TJSONObject;
var
  Json, JsonUsuario: TJSONObject;
  ArrayUsuarios: TJSONArray;

  Query: TFDQuery;
  i: Integer;
begin
  try
    Json := TJSONObject.Create;
    ArrayUsuarios := TJSONArray.Create;

    Query := TFDQuery.Create(nil);
    Query.Connection := Conexion;

    Query.Close;
    Query.SQL.Text := 'SELECT * FROM usuario';
    Query.Open;
    Query.First;

    for i := 1 to Query.RecordCount do
    begin
      JsonUsuario := TJSONObject.Create;

      JsonUsuario.AddPair('idusuario', Query.FieldByName('idusuario').AsString);
      JsonUsuario.AddPair('nombre', Query.FieldByName('nombre').AsString);
      JsonUsuario.AddPair('correo', Query.FieldByName('correo').AsString);
      JsonUsuario.AddPair('contra', Query.FieldByName('contra').AsString);

      ArrayUsuarios.Add(JsonUsuario);
      Query.Next;
    end;

    Json.AddPair('Usuarios', ArrayUsuarios);
    mensaje('Usuarios', Json.ToString);
  except
    on E: Exception do
    begin
      Json.AddPair('Error', E.Message);
      mensaje('Usuarios-Error', E.Message);
    end;
  end;

  Result := Json;
end;

{ Método GET - Usuario }
function TRegresion.Usuario(const IdUsuario: string): TJSONObject;
var
  Json: TJSONObject;

  Query: TFDQuery;
  i: Integer;
begin
  try
    Json := TJSONObject.Create;

    Query := TFDQuery.Create(nil);
    Query.Connection := Conexion;

    Query.Close;
    Query.SQL.Text := 'SELECT * FROM usuario WHERE idusuario=' + #39 +
      IdUsuario + #39;
    Query.Open;

    Json.AddPair('idusuario', Query.FieldByName('idusuario').AsString);
    Json.AddPair('nombre', Query.FieldByName('nombre').AsString);
    Json.AddPair('correo', Query.FieldByName('correo').AsString);
    Json.AddPair('contra', Query.FieldByName('contra').AsString);

    mensaje('Usuario', Json.ToString);
  except
    on E: Exception do
    begin
      Json.AddPair('Error', E.Message);
      mensaje('Usuario-Error', E.Message);
    end;
  end;

  Result := Json;
end;

{ Método PUT - Usuario }
function TRegresion.acceptUsuario(const datos: TJSONObject): TJSONObject;
var
  Json: TJSONObject;
  Query: TFDQuery;
  IdUsuario: string;
begin
  try
    Query := TFDQuery.Create(nil);
    Query.Connection := Conexion;
    Json := TJSONObject.Create;

    Query.Close;
    Query.SQL.Clear;

    IdUsuario := datos.GetValue('idusuario').Value;

    Query.SQL.Add('UPDATE usuario SET ');
    Query.SQL.Add('nombre=:nombre, ');
    Query.SQL.Add('contra=:contra, ');
    Query.SQL.Add('correo=:correo  WHERE idusuario=' + #39 + IdUsuario + #39);

    Query.Params.ParamByName('nombre').Value := datos.GetValue('nombre').Value;
    Query.Params.ParamByName('correo').Value := datos.GetValue('correo').Value;
    Query.Params.ParamByName('contra').Value := datos.GetValue('contra').Value;

    Query.ExecSQL;

    Json.AddPair('Respuesta', 'El Usuario se actualizo correctamente');
    mensaje('acceptUsuario', Json.ToString);
  except
    on E: Exception do
    begin
      Json.AddPair('Error', E.Message);
      mensaje('acceptUsuario-Error', E.Message);
    end;
  end;

  Result := Json;
end;

{ Método DELETE-Usuario }
function TRegresion.cancelUsuario(const IdUsuario: string): TJSONObject;
var
  Json: TJSONObject;

  Query: TFDQuery;
  i: Integer;
begin
  try
    Json := TJSONObject.Create;

    Query := TFDQuery.Create(nil);
    Query.Connection := Conexion;

    Query.Close;
    Query.SQL.Text := 'DELETE FROM usuario WHERE idusuario=' + #39 +
      IdUsuario + #39;
    Query.ExecSQL;

    Json.AddPair('Respuesta', 'El Usuario se elimino correctamente');

    mensaje('cancelUsuario', Json.ToString);
  except
    on E: Exception do
    begin
      Json.AddPair('Error', E.Message);
      mensaje('cancelUsuario-Error', E.Message);
    end;
  end;

  Result := Json;

  { C: Create - POST
    R: Read - GET
    U: Update - PUT
    D: Delete - DELETE
  }
end;

procedure TRegresion.mensaje(procedimiento, msg: string);
begin
  FRegresion.mensaje(procedimiento, msg);
end;

end.
