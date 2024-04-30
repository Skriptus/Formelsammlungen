- # ***Konstanten***
	- ### $C\degree\longrightarrow{}K$
		- $T=t\degree C+273.15K$
- ### **Boltzman**
	- $kB = \frac{R}{NA}= 1.380658 × 10^{-23} \frac{J}{K}$
- ### **Gaskonstante**
	- $R = 8,314 \frac{J}{mol K}$
- ### **Avogadro-Konstante**
	- $NA = 6,022 × 10^{23} \frac{1}{mol}$
- ### **Entropiekonstante**
	- $C\lor k=k_{B}*ln(2)\thickapprox1,38\frac{J}{K}$
- # ***Formeln***
	- ## **Allgemein**
		- $dW=-PdV$
		- $\Delta Q=\nu C_v(T_2-T_1)$
		- $PV=\nu RT$
- | **Typ** | **Zustände** | **Arbeit** | **innere Energie** |
  	| --- | --- | --- | --- |
  	| **Isochor** |  $V=const.$ | $\frac{T_2}{T_1}=\frac{P_2}{P_1}$ | $dW=0$ |
  	| **Isobar** | $P=const.$ | $dW=P(V_1-V_2)$ | $dQ=\nu C_P\Delta T+VdP$ |
	| | $\frac{T_2}{T_1}=\frac{V_2}{V_1}$ | $\nu R(T_1-T_2)$ | $dQ=\nu C_P(T_2-T1)$ |
	| **Isotherm** | $T=const.$ | $dW=-PdV$ | $\Delta Q=-\Delta W$| 
	| | $P_1V_1=P_2V_2$ | $dW=-\nu RT\frac{dV}{V}$ | | |
	| | $PV=const.$ | $-\nu RT\cdot ln\frac{V_2}{V_1}$| $\Delta Q = \Delta W$|
	| **Adiabat** | $PV^{\kappa}=const.$ | $VdP+PdV=\nu RdT$ | $dQ=0$ |
	| | $\frac{P_2}{P_1}=(\frac{V_1}{V_2})^{\kappa}$ | $PdV=\nu RdT+\kappa PdV$ | |
	| | $\frac{T_2}{T_1}=(\frac{V_1}{V_2})^{\kappa-1}$ | $(\kappa -1)PdV=-\nu RdT$ | |
	| | $\frac{T_2}{T_1}=(\frac{P_1}{P_2})^{\frac{\kappa-1}{\kappa}}$ | $-PdV=\frac{\nu R}{\kappa -1}dT$ | |
	| | | $\Delta W =\frac{\nu R}{\kappa-1}(T_2-T_1)$ | |
	| | | $\Delta W=\nu C_v(T_2-T_1)$
	| **Polytrop** | $PV^{n}=const.$ | $PdV+VdP=\nu RdT$ | $\Delta U=\Delta Q+\Delta W$ |
	| | $\frac{P_2}{P_1}=(\frac{V_1}{V_2})^n$ | $VdP+-\nu PdV$ | $\Delta Q=\nu C_v(T_2-T_1)+\frac{-\nu R}{n-1}(T_2-T_1)$ |
	| | $\frac{T_2}{T_1}=(\frac{V_1}{V_2})^{n-1}$ | $-(n-1)PdV=\nu RdT$ | $\Delta Q=\nu C_v(T_2-T_1)(\frac{n-\kappa}{n-1})$ |
	| | $\frac{T_2}{T_1}=(\frac{P_1}{P_2})^{\frac{n-1}{n}}$| $\Delta W= \frac{\nu R}{n-1}(T_2-T_1)$ | |
  - ## **Innere Energie**
  	- $U=\frac{f}{2}\nu RT$
  	- $dU=\nu C_v dT$
  	- $\Delta U = \nu C_v \Delta T$
  - ## **Enthalpie**
    - $H=U+PV$
    - $dH=\nu C_p dT$
    - $\Delta H=\nu C_p \Delta T$
  - ## **Entropie S: reduzierte Wärme**
    - $\Delta S=\frac{\Delta Q}{T}$,$S=kln\Omega$
    - $dS=\nu C_p\frac{dT}{T}-\nu R\frac{dP}{P}$
    - $dS=\nu C_v\frac{dT}{T}+\nu R\frac{dV}{V}$
    - $dS=\nu C_v\frac{dP}{P}+\nu C_p\frac{dV}{V}$
- ## **Carnot-Prozess**