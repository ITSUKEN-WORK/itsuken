FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

RUN dotnet run

COPY . .

ENTRYPOINT ["dotnet", "bin/Debug/net8.0/api.dll"]