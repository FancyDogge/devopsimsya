FROM python:3.14.7-slim-trixie

# PYTHONDONTWRITEBYTECODE=1 запрещает создание .pyc файлов
# PYTHONUNBUFFERED=1 выключает буферизацию стандартных потоков вывода stdout и stderr (а иначе будет задержка или неполные логи при крашах)
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8080

# рабочая директория внутри контейнера
WORKDIR /app

COPY requirements.txt .

# установка библиотек в системное окружение контейнера без кэша (pip не сохраняет скачанные библиотеки)
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# копируем исходный код приложения
COPY ./src ./src

# всё, что не переключено явно на другого пользователя, выполняется с максимальными системными привилегиями, а нам етого не надо
RUN useradd -m -u 1000 appuser && \
    chown -R appuser:appuser /app
USER appuser

# sh - потому что докер не умеет раскурывать переменные, ${PORT} станет просто строкой
# -c - флаг, чтобы sh взял всю следующую строку в кавычках, прочитай её как скрипт, подставил значения переменных и выполнил
CMD ["sh", "-c", "exec uvicorn src.main:app --host 0.0.0.0 --port ${PORT}"]