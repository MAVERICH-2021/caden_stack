package com.example.spring_learn.api.conf;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.NonNull;

@Getter
@NoArgsConstructor
public class BinanceConfig {
    @Value("${binance.apiKey}")
//    @NonNull
    @NotNull
    private String apiKey;
    @Value("${binance.secretKey}")
    private String secretKey;
}
