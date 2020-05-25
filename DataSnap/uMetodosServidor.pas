unit uMetodosServidor;

interface

uses System.SysUtils, System.Classes, System.Json,
  Datasnap.DSServer, Datasnap.DSAuth;

type
{$METHODINFO ON}
  TRegresion = class(TDataModule)
  private
    { Private declarations }
  public
    { Public declarations }
    function EchoString(Value: string): string;
    function ReverseString(Value: string): string;

    function ServidorConectado: TJSONObject;
  end;
{$METHODINFO OFF}

implementation

{$R *.dfm}

uses System.StrUtils;

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

end.
