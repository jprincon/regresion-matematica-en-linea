object Regresion: TRegresion
  OldCreateOrder = False
  OnCreate = DataModuleCreate
  Height = 491
  Width = 471
  object Conexion: TFDConnection
    Params.Strings = (
      'Database=regresion_matematica'
      'User_Name=postgres'
      'Password=postgres'
      'DriverID=PG')
    FetchOptions.AssignedValues = [evMode]
    FetchOptions.Mode = fmAll
    LoginPrompt = False
    Left = 120
    Top = 80
  end
  object FDQuery1: TFDQuery
    Connection = Conexion
    Left = 384
    Top = 56
  end
end
