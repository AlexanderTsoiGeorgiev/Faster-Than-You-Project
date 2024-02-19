namespace FasterThanYou.Api.Drivers
{
    using FasterThanYou.Api.Drivers.Data;
    using Microsoft.EntityFrameworkCore;

    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            //change to developer secret
            string? connectionString = builder.Configuration["ConnectionStrings:DefaultConnection"]
                                                               ?? throw new ArgumentNullException();

            builder.Services.AddDbContext<DriverServiceDbContext>(options => options.UseSqlServer(connectionString));

            builder.Services.AddControllers();

            builder.Services.AddHttpClient();

            //builder.Services.AddHttpClient();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader());
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                app.UseCors("AllowAll");
                app.Use((context, next) =>
                {
                    context.Response.Headers["Access-Control-Allow-Origin"] = "*";
                    return next.Invoke();
                });
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}