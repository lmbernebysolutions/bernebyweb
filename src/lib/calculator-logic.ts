export interface CalculatorState {
    monthlyLeads: number;
    dealValue: number;
    conversionRate: number;
}

export const ROI_DEFAULTS: CalculatorState = {
    monthlyLeads: 10,
    dealValue: 2500,
    conversionRate: 20,
};

export const calculateROI = (state: CalculatorState) => {
    const currentRevenue = state.monthlyLeads * (state.conversionRate / 100) * state.dealValue;

    // Berneby Uplift Assumptions:
    // - 2.5x more leads (SEO + Geo-Net)
    // - 20% better conversion (Trust + Vertical Funnels)
    // - 10% higher deal value (better qualified leads via Voice-Guard)

    const projectedLeads = state.monthlyLeads * 2.5;
    const projectedConversion = Math.min(state.conversionRate * 1.2, 90); // Cap at 90%
    const projectedDealValue = state.dealValue * 1.1;

    const projectedRevenue = projectedLeads * (projectedConversion / 100) * projectedDealValue;
    const extraRevenue = projectedRevenue - currentRevenue;

    return {
        currentRevenue,
        projectedRevenue,
        extraRevenue,
        projectedLeads: Math.round(projectedLeads),
    };
};

export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(value);
};
