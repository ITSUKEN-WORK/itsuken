FROM mcr.microsoft.com/dotnet/sdk:8.0

WORKDIR /app

COPY . .

RUN dotnet build

EXPOSE 5216

ENTRYPOINT ["dotnet", "bin/Debug/net8.0/api.dll"]