program DataSnap;
{$APPTYPE GUI}

{$R *.dres}

uses
  Vcl.Forms,
  Web.WebReq,
  IdHTTPWebBrokerBridge,
  uFRegresion in 'uFRegresion.pas' {FRegresion},
  uMetodosServidor in 'uMetodosServidor.pas' {Regresion: TDataModule},
  uModuloWeb in 'uModuloWeb.pas' {ModuloWeb: TWebModule};

{$R *.res}

begin
  if WebRequestHandler <> nil then
    WebRequestHandler.WebModuleClass := WebModuleClass;
  Application.Initialize;
  Application.CreateForm(TFRegresion, FRegresion);
  Application.Run;
end.
